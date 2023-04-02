import React from "react";


const Home = ({selectedLanguage}) => {

    return (

            <div className="HomePage">
                <h2 className="glow">
                {
                selectedLanguage==="AZ" ?
                "Front-end dünyama xoş gəlmisiniz" :
                "Welcome to my Front-End word"
                }
                </h2>
                <h1 className="Slogan">
                {
                    selectedLanguage==="AZ" ?
                    "Xəyallarını kodlaşdır" :
                    "Code yor dream"
                    }
                
                </h1>
            </div>
 
    );
}

export default Home;