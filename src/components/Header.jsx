import quiz_img from '../assets/quiz-logo.png';

export default function Header(){
    return(
        <>
        <header>
            <img src={quiz_img} alt="Quiz logo" />
            <h1>React Quiz</h1>

        </header>
       
        </>
    )
}