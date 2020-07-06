import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GithubDetail() {
    const [detail, setDetail] = useState({});
    const { username } = useParams();

    const fetchDetail = async () => {
        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);
        const result = await response.json();
        setDetail(result);
    };

    useEffect(() => {
        fetchDetail();
    }, []);

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <p>{detail.login}</p>
                <p>{detail.company}</p>
                <img src={detail.avatar_url} alt="avatar" />
                <p>Followers: {detail.followers}</p>
                <p>Following: {detail.following}</p>
            </div>
        </div>
    );
}
