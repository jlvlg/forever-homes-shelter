for (const element of document.getElementsByClassName(
  "carousel"
) as HTMLCollectionOf<HTMLUListElement>) {
  const style = getComputedStyle(element);
  const arrows = element.getElementsByClassName(
    "carousel-arrow"
  ) as HTMLCollectionOf<HTMLLIElement>;
  const items = element
    .getElementsByClassName("carousel-items")
    .item(0) as HTMLLIElement;
  const dots = element
    .getElementsByClassName("carousel-dots")
    .item(0) as HTMLLIElement;
  const indexDot = dots.children.item(
    +element.dataset.index!
  ) as HTMLDivElement;

  (items.firstElementChild as HTMLUListElement).style.insetInlineStart = "0px";

  indexDot.style.backgroundColor = "white";
  for (const dot of dots.children as HTMLCollectionOf<HTMLDivElement>)
    dot.style.insetInlineStart = "0px";

  arrows.item(0)!.addEventListener("click", () => {
    if (+element.dataset.index! > 0) {
      (items.firstElementChild as HTMLUListElement).style.insetInlineStart = `${
        +(
          items.firstElementChild as HTMLUListElement
        ).style.insetInlineStart.replace("px", "") +
        +style.getPropertyValue("--item-inline-size").replace("px", "") +
        +style.getPropertyValue("gap").split(" ")[1].replace("px", "")
      }px`;

      indexDot.style.insetInlineStart = `${
        +indexDot.style.insetInlineStart.replace("px", "") - 32
      }px`;

      const nextDot = dots.children.item(
        +element.dataset.index!
      ) as HTMLDivElement;

      nextDot.style.insetInlineStart = `${
        +nextDot.style.insetInlineStart.replace("px", "") + 32
      }px`;

      element.dataset.index = (+element.dataset.index! - 1).toString();
    }
  });

  arrows.item(1)!.addEventListener("click", () => {
    if (+element.dataset.index! < dots.children.length - 1) {
      (items.firstElementChild as HTMLUListElement).style.insetInlineStart = `${
        +(
          items.firstElementChild as HTMLUListElement
        ).style.insetInlineStart.replace("px", "") -
        +style.getPropertyValue("--item-inline-size").replace("px", "") -
        +style.getPropertyValue("gap").split(" ")[1].replace("px", "")
      }px`;

      indexDot.style.insetInlineStart = `${
        +indexDot.style.insetInlineStart.replace("px", "") + 32
      }px`;

      const nextDot = dots.children.item(
        +element.dataset.index! + 1
      ) as HTMLDivElement;

      nextDot.style.insetInlineStart = `${
        +nextDot.style.insetInlineStart.replace("px", "") - 32
      }px`;

      element.dataset.index = (+element.dataset.index! + 1).toString();
    }
  });
}
