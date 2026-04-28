import useForm from './hooks/useForms.js';

function MyForm() {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulär</h2>

      <div>
        <label>Namn:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>E-post:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Skicka</button>
    </form>
  );
}

export default MyForm;
