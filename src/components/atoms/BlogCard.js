import React from "react"

const BlogCard = ({ heading, date, paragraph, imgUrl, projectLink }) => {
    return (
        <div
            className="blog-card"
            style={{
                backgroundImage:
                    "url(" +
                    imgUrl +
                    ")",
            }}
        >
            <div className="content">
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <h1>{heading}</h1>
                </a>
                <p className="date">{date}</p>
                <p className="text">{paragraph}</p>
            </div>
        </div>
    )
}

export default BlogCard
