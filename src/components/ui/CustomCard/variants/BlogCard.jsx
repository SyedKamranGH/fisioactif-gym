import React from "react";
import Card from "../primitive/Card";
import cls from "../styles/Card.module.css";
import Button from "../../Button/index.jsx";

function BlogCard({
  image,
  title,
  excerpt,
  author,
  date,
  buttonText = "Ler Mais",
  size = "medium",
  className = "",
}) {
  const formatted =
    typeof date === "string" ? date : date ? new Date(date).toLocaleDateString() : "";
  return (
    <Card size={size} className={className}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} className={cls.blogImage} loading="lazy" />
      ) : (
        <div className={cls.blogImage} />
      )}
      <div className={cls.blogBody}>
        {(author || formatted) && (
          <div className={cls.metaRow}>
            {author?.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={author.avatar} alt={author?.name || "author"} className={cls.metaAvatar} />
            ) : null}
            {author?.name ? <span>By {author.name}</span> : null}
            {formatted ? <span>• {formatted}</span> : null}
          </div>
        )}
        {title ? <div className={cls.blogTitle}>{title}</div> : null}
        {excerpt ? <p className={cls.blogExcerpt}>{excerpt}</p> : null}
        <div style={{ marginTop: 20 }}>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </Card>
  );
}

export default BlogCard;
