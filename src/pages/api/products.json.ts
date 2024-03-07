const products = [{
              "id": "1",
              "title": "Bota media amarillo claro",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque earum laboriosam quidem, similique odit!",
              "photo": "/src/assets/img/longos03.jpg"
            },
            {
              "id": "2",
              "title": "Bota sport gris",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque earum laboriosam quidem, similique odit!",
              "photo": "/src/assets/img/longos01.jpg"
            },
            {
              "id": "3",
              "title": "Bota marron clasica",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque earum laboriosam quidem, similique odit!",
              "photo": "/src/assets/img/longos04.jpg"
            },
            {
              "id": "4",
              "title": "Bota negra biker",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque earum laboriosam quidem, similique odit!",
              "photo": "/src/assets/img/longos05.jpg"
            },
            {
              "id": "5",
              "title": "Bota principiante",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque earum laboriosam quidem, similique odit!",
              "photo": "/src/assets/img/longos02.jpg"
            }]

export async function GET({params, request}) {
  return new Response(
    JSON.stringify({
      products
    })
  )
}
