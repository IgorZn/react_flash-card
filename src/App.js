import './App.css';
import {useState} from "react";
import Card from "./components/Card";

const questions = [
    {
        id: Date.now(),
        question: "What is React language based on?",
        answer: "JavaScript"
    },
    {
        id: Date.now(),
        question: "What is React?",
        answer: "React(aka React.js or ReactJS) is an open-source front-end JavaScript library"
    },
    {
        id: Date.now(),
        question: "What is the history behind React evolution?",
        answer: "The history of ReactJS started in 2010 with the creation of XHP."
    },
    {
        id: Date.now(),
        question: "What are building blocks of React apps?",
        answer: "Components"
    },
    {
        id: Date.now(),
        question: "What are the major features of React?",
        answer: "JSX, Virtual DOM, server-side rendering, Unidirectional or one-way, reusable/composable UI components"
    },
    {
        id: Date.now(),
        question: "What is JSX?",
        answer: "JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript."
    },
]

function App() {
    return (
        <div className="container">
            <h1>Flashcard</h1>
            <div className={"list"}>
                <div className="row d-flex flex-wrap">
                    {questions.map((card, i) => (
                        <div className="col" key={card.id + Math.floor(Math.random() * 99)}>
                            <Card card={card}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
