const { Language, StaticOption } = require('../models');

/**
 * Set language middleware
 * Reads language from header, query param, or uses default
 */
const setLanguage = async (req, res, next) => {
  try {
    // Get language from various sources (priority: header > query > cookie > default)
    let langCode = req.headers['accept-language']?.split(',')[0]?.split('-')[0] ||
                   req.headers['x-lang'] ||
                   req.query.lang ||
                   req.cookies?.lang ||
                   'en';

    // Validate language exists in database
    const language = await Language.findOne({
      where: { code: langCode, status: 1 }
    });

    if (!language) {
      // Fall back to default language
      const defaultLang = await StaticOption.findOne({
        where: { option_name: 'default_language' }
      });
      langCode = defaultLang?.option_value || 'en';
    }

    req.lang = langCode;
    req.language = language;

    // Set response header
    res.setHeader('Content-Language', langCode);

    next();
  } catch (error) {
    // On error, use default language
    req.lang = 'en';
    next();
  }
};

/**
 * Get translated text helper
 */
const getTranslation = async (key, lang = 'en') => {
  try {
    const language = await Language.findOne({
      where: { code: lang }
    });

    if (language && language.translations) {
      const translations = JSON.parse(language.translations);
      return translations[key] || key;
    }

    return key;
  } catch (error) {
    return key;
  }
};

module.exports = {
  setLanguage,
  getTranslation
};
