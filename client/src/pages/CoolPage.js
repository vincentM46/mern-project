import { useState, useEffect } from 'react';
import { randomAdvice } from '../services/Constants';
import { searchAdvice } from '../services/Constants';

function CoolPage() {
    const [advice, setAdvice] = useState("");
    const [searchedAdvice, setSearchedAdvice] = useState([])
    const [keywords, setKeywords] = useState([])

    async function handleClick() {
        const wisdom = await randomAdvice()
        console.log(wisdom)
        setAdvice(wisdom.data.slip.advice)
    }
    useEffect(() => {
        handleClick();
    }, [])

    async function searchKeywords(keywords) {
        try {
            const res = await searchAdvice(keywords)
            const { slips } = res
            setSearchedAdvice(slips)
        } catch (err) {
            return "no result found"
        }
    }
    function handleChange(e) {
        setKeywords(e.target.value)
    }
    function deletedAdvice(id) {
        const deletedRes = searchedAdvice.filter((x) => x.id !== id)
        setSearchedAdvice(deletedRes)
    }
    const showAdvice = Array.isArray(searchedAdvice) ? (searchedAdvice.map((x, index) => (
        <p onClick={() => deletedAdvice(x.id)} key={x.id}>
            {x.advice}
        </p>
    ))
    ) : (
        <h2>No advice found for this search</h2>
    )
    return (
        <div>
            <div className="randomAdviceBox">
                <button onClick={() => handleClick()}>Click for Random Wisdom</button>
                <p className="advice">{advice}</p>
            </div>
            <div className="searchAdviceBox">
                <input onChange={handleChange} value={keywords} type="text" placeholder="Search for advice here"/>
                <button onClick={() => searchKeywords(keywords)}>Search for Advice</button>
                <p className="advice">{showAdvice}</p>
            </div>
        </div>
    )
};

export default CoolPage;