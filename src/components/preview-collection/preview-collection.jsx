import React from "react";

import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="tilte">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
