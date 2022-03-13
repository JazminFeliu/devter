import Link from "next/link";

export default function Timeline ({ userName }) {
    return (
        <>
        <h1> This is the timeline of { userName } </h1>
        <Link href="/">Go Home</Link>
        <style jsx>{`
        h1 {
            font-size: 36 px;
            color: red;
        }
        `}</style>     
    </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const { userName } = response
        return { userName }
    })
}