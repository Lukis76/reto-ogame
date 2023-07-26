import { Button } from "../../components/ui/button";

const HubPage = () => {
  return (
    <main>
      <div>
        <Button>Jugar</Button>
        <Button>
          <p>
            jugado por ultima vez
            <span>{"server - jugadores: 5342"}</span>
          </p>
        </Button>
      </div>
    </main>
  );
};

export default HubPage;
