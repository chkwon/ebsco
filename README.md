# INFORMS to SFX

A bookmarklet that resolves DOIs via the KAIST SFX link resolver.

## Installation

Drag the link below to your bookmarks bar:

[INFORMS to SFX](javascript:(function(){var%20m=location.href.match(/10\.\d{4,9}\/[-._;()\/:A-Z0-9]+/i);if(!m){alert(%22Could%20not%20find%20DOI%20on%20this%20page.%22);return}location.href=%22https://sfx-82kst-kaist.hosted.exlibrisgroup.com/kaist?sid=google&id=%22+encodeURIComponent(%22doi:%22+m[0]);})();)

Or create a new bookmark manually and paste the contents of `bookmarklet.js` as the URL.

## Usage

1. Drag the link above to your bookmarks bar.
2. Navigate to any page with a DOI in the URL (e.g., `pubsonline.informs.org/doi/10.1287/trsc.2020.0973`).
3. Click the bookmarklet to resolve the paper via the KAIST SFX link resolver.
