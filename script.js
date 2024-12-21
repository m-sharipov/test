let slideIndex = [0, 0, 0, 0]; // Массив, хранящий текущий индекс для каждого набора слайдов (по одному индексу для каждого сета)
let slideId = ["room1-slides", "room2-slides", "room3-slides", "room4-slides"]; // Массив с ID элементов (контейнеров), которые содержат слайды для каждого набора

// Функция для изменения текущего слайда (движение на n позиций) для указанного набора (no)
function moveSlide(n, no) {
    // Находим элемент контейнера слайдов по ID из массива slideId, соответствующий нужному набору (no)
    let slides = document.getElementById(slideId[no]);
    
    // Находим общее количество слайдов (картинок) в контейнере
    let totalSlides = slides.getElementsByTagName("img").length;

    // Вычисляем новый индекс для текущего набора с учетом общего количества слайдов
    // Если индекс выходит за границы, то он корректируется (зацикливается) с помощью оператора %
    slideIndex[no] = (slideIndex[no] + n + totalSlides) % totalSlides;

    // Применяем CSS-трансформацию к контейнеру слайдов для смещения на нужный слайд
    slides.style.transform = `translateX(${-slideIndex[no] * 100}%)`;
}
