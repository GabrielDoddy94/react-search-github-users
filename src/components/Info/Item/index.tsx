import { IItemProps } from "./@types";

export function Item({ icon, label, value, color }: IItemProps) {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
}
