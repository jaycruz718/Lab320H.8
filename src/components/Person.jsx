export default function Person({ eyeColor, hairColor, skinColor, name, people }) {        
    return (
        <div>
            <h2>{name}</h2>
            <p>Eye Color: {eyeColor}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
            {people && people.length > 0 ? (
                <ul>
                    {people.map((person, idx) => (
                        <li key={idx}>{person}</li>
                    ))}
                </ul>
            ) : (
                <p>No people found.</p>
            )}
        </div>
    );
}