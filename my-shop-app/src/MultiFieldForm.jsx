import {useState} from 'react';

function MultiFieldForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('namn:', formData.name);
        console.log('email:', formData.email);
        console.log('meddelande:', formData.message);
    };

    return (
        <div>
            <h2>Kontaktformulär</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label> Namn:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label> Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label> Meddelande:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Skicka</button>
            </form>
        </div>
    );
}

export default MultiFieldForm;