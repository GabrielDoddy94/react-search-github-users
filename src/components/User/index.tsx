import { Wrapper } from "./styles";
import { Card } from "../Card";
import { Followers } from "../Followers";

export function User() {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
}
