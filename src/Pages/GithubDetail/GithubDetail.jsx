import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

export default function GithubDetail() {
    const { username } = useParams();
    const [detail, setDetail] = useState({});

    const fetchDetail = useCallback(async () => {
        const url = await `https://api.github.com/users/${username}`;

        const response = await fetch(url);
        const result = await response.json();
        setDetail(result);
    }, [username]);

    useEffect(() => {
        fetchDetail();
    }, [fetchDetail]);

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
