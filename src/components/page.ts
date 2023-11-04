export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul"); //ul 엘리먼트 생성
    this.element.setAttribute("class", "page"); //class 이름은 page
    this.element.textContent = "this is page component";
  }

  //외부에서 사용하는 api, 추가하고 싶은 요소 전달하면 함수가 알아서 페이지 추가
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
