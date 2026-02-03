// Dynamic Sidebar Search Script
// Add this script at the bottom of your layout file or in a separate JS file

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('main_search');
    const sidebarItems = document.querySelectorAll('.sidebar_list_item');

    if (!searchInput) return;

    // Create a wrapper for search highlighting
    function highlightText(element, searchTerm) {
        const text = element.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        if (searchTerm && regex.test(text)) {
            // Get the text content excluding SVG
            const svg = element.querySelector('svg');
            const textNode = Array.from(element.childNodes).find(node =>
                node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );

            if (textNode) {
                const originalText = textNode.textContent.trim();
                const highlightedHTML = originalText.replace(regex, '<mark class="search-highlight">$1</mark>');

                // Create a span to hold the highlighted text
                const span = document.createElement('span');
                span.innerHTML = highlightedHTML;

                // Replace text node with highlighted span
                textNode.textContent = '';
                element.appendChild(span);
            }
            return true;
        }
        return false;
    }

    // Remove highlighting
    function removeHighlight(element) {
        const highlightSpan = element.querySelector('span');
        if (highlightSpan) {
            const text = highlightSpan.textContent;
            highlightSpan.remove();

            // Add text back as text node
            const textNode = Array.from(element.childNodes).find(node =>
                node.nodeType === Node.TEXT_NODE
            );
            if (textNode) {
                textNode.textContent = text;
            } else {
                element.appendChild(document.createTextNode(text));
            }
        }
    }

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        sidebarItems.forEach(item => {
            const li = item.closest('li');

            // Remove previous highlights
            removeHighlight(item);

            if (!searchTerm) {
                // Show all items when search is empty
                li.style.display = '';
                item.classList.remove('search-matched');
                return;
            }

            const itemText = item.textContent.toLowerCase().trim();

            if (itemText.includes(searchTerm)) {
                // Show and highlight matched items
                li.style.display = '';
                item.classList.add('search-matched');
                highlightText(item, searchTerm);

                // Add pulse animation
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'searchPulse 0.5s ease';
                }, 10);
            } else {
                // Hide non-matched items
                li.style.display = 'none';
                item.classList.remove('search-matched');
            }
        });

        // Show message if no results
        showNoResultsMessage(searchTerm);
    });

    // Clear search on escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });

    // Show no results message
    function showNoResultsMessage(searchTerm) {
        const sidebar = document.querySelector('.sidebar_list_wrapper');
        let noResultsMsg = document.getElementById('no-results-message');

        const visibleItems = Array.from(sidebarItems).filter(item =>
            item.closest('li').style.display !== 'none'
        );

        if (searchTerm && visibleItems.length === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'no-results-message';
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <p>No results found for "<strong>${searchTerm}</strong>"</p>
                    <small>Try different keywords</small>
                `;
                sidebar.appendChild(noResultsMsg);
            } else {
                noResultsMsg.querySelector('strong').textContent = searchTerm;
                noResultsMsg.style.display = 'block';
            }
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
});