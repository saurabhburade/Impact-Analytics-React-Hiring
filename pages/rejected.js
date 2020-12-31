import React from "react";
import Header from "../components/Header/Header";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import {useState} from "react";
import {useEffect} from "react";

export default function rejected() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const rejectlist =
            JSON.parse(localStorage.getItem("data")).filter(
                element => element.status === "Rejected"
            ) || [];
        setdata(rejectlist);
    }, []);

    return (
        <>
            <Header />
            <div className="main d-flex flex-wrap">
                {data.map((element, idx) => {
                    return (
                        <CandidateCard
                            image={element.Image}
                            name={element.name}
                            id={element.id}
                            status={element.status}
                            idx={idx}
                            actions={true}
                            key={element.id}
                        />
                    );
                })}
            </div>
        </>
    );
}
