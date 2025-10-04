

function History({ guesses }) {

    return (
        <>
            <div className="bg-gray-300 p-3 rounded text-xl font-bold">
                <h2>Previous Number Guess ({guesses.length})</h2>
                {guesses.length === 0 ? (
                    <p>No guesses yet</p>
                ) : (
                    <div className="mt-2"  >
                        {guesses.map((ele, idx) => (
                            <span key={idx} className="ms-2 bg-white p-1 rounded" >{ele}</span>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}

export default History
