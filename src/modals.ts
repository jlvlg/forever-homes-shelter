const donateModal = document.getElementById(
  "donate-modal"
) as HTMLDialogElement;
const adoptModal = document.getElementById("adopt-modal") as HTMLDialogElement;

for (const button of document.getElementsByClassName(
  "open-donate"
) as HTMLCollectionOf<HTMLButtonElement>) {
  button.addEventListener("click", (ev) => donateModal.showModal());
}

document
  .getElementById("close-donate")!
  .addEventListener("click", (ev) => donateModal.close());
document
  .getElementById("close-adopt")!
  .addEventListener("click", (ev) => adoptModal.close());

for (const button of document.getElementsByClassName(
  "open-adopt"
) as HTMLCollectionOf<HTMLButtonElement>) {
  button.addEventListener("click", (ev) => adoptModal.showModal());
}

const adoptDay = document.getElementById(
  "adopt-modal-day"
) as HTMLSelectElement;
const adoptMonth = document.getElementById(
  "adopt-modal-month"
) as HTMLSelectElement;
const adoptYear = document.getElementById(
  "adopt-modal-year"
) as HTMLSelectElement;

function fillDays(month: number, year: number) {
  while (adoptDay.children.length > 1) {
    adoptDay.lastChild?.remove();
  }
  Array.from({ length: new Date(year, month, 0).getDate() }, (x, i) =>
    (i + 1).toString()
  ).map((n) => adoptDay.appendChild(new Option(n, n)));
}

function fillMonths() {
  Array.from({ length: 12 }, (x, i) => (i + 1).toString()).map((month) =>
    adoptMonth.appendChild(new Option(month, month))
  );
}

function fillYears() {
  Array.from({ length: 100 }, (x, i) =>
    (new Date().getFullYear() - i).toString()
  ).map((month) => adoptYear.appendChild(new Option(month, month)));
}

adoptMonth.addEventListener("change", (event) => {
  if (adoptYear.value !== "Year")
    fillDays(+(event.target as HTMLSelectElement).value, +adoptYear.value);
});

adoptYear.addEventListener("change", (event) => {
  if (adoptMonth.value !== "Month")
    fillDays(+adoptMonth.value, +(event.target as HTMLSelectElement).value);
});

adoptModal
  .getElementsByTagName("button")
  .item(0)
  ?.addEventListener("click", (event) => {
    event.preventDefault();
    if (adoptDay.value !== "Day")
      if (
        Date.now() -
          new Date(
            +adoptYear.value,
            +adoptMonth.value,
            +adoptDay.value
          ).getTime() >=
        new Date(1991, 0, 1).getTime()
      )
        if (adoptModal.getElementsByTagName("form").item(0)?.checkValidity())
          adoptModal.getElementsByTagName("form").item(0)?.submit();
  });

fillMonths();
fillYears();
