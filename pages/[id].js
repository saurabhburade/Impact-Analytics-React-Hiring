import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import Header from "../components/Header/Header";

function singleCandidate() {
    const [user, setuser] = useState({});
    const [idx, setidx] = useState(-1);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if (id) {
            const data = JSON.parse(localStorage.getItem("data"));
            setuser(
                data.find((element, idx) => {
                    if (element.id === id) {
                        setidx(idx);
                        return true;
                    }
                })
            );
        }
    }, [id]);

    return (
        <>
            <Header />
            <div className="main">
                {!!user && (
                    <CandidateCard
                        image={user.Image}
                        name={user.name}
                        id={user.id}
                        status={user.status}
                        idx={idx}
                        actions={true}
                    />
                )}
            </div>
        </>
    );
}

export default singleCandidate;
