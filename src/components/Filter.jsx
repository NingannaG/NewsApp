import React from 'react'
import styled from "styled-components";
const Wrapper = styled.div`
    height: 20px;
    width: 100%;

`
const Filter = () => {
    return (
        <Wrapper>
            <div>
                <label htmlFor="cars">Popularity</label>

                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </Wrapper>
    )
}

export default Filter