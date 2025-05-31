import React from 'react';

/**
 * TagFilter component for filtering blog posts by tag.
 * Props:
 *   - tags: array of tag strings
 *   - currentTag: string (currently selected tag)
 *   - onTagSelect: function (called with tag string)
 */
function TagFilter({ tags, currentTag, onTagSelect }) {
  return (
    <nav className="flex flex-wrap gap-2 justify-center my-4" aria-label="Blog tag filter">
      <button
        className={`px-3 py-1 rounded-full border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${!currentTag ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-700'}`}
        onClick={() => onTagSelect('')}
        aria-pressed={!currentTag}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${currentTag === tag ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-700'}`}
          onClick={() => onTagSelect(tag)}
          aria-pressed={currentTag === tag}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}

export default TagFilter; 