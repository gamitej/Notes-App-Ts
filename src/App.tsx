// comp
import Header from "@/comp/Header";
import CreateNote from "@/comp/CreateNote";
import Notes from "@/comp/Notes";
// mui
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{ padding: "10px" }}>
        <CreateNote />
        <Notes />
      </Box>
    </div>
  );
}

export default App;
