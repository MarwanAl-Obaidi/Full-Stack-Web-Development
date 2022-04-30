import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = (props) => {
  return (
    <div>
      <h2>login</h2>
      <form>
        <div>
          <TextField label="username" />
        </div>
        <div>
          <TextField label="password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  return <Login />;
};

export default App;
