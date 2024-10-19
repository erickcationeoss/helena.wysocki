let currentIndex = 0;

        function moveCarousel(direction) {
            const images = document.querySelector('.carousel-images');
            const totalImages = images.children.length;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalImages - 1; // Vai para a última imagem
            } else if (currentIndex >= totalImages) {
                currentIndex = 0; // Volta para a primeira imagem
            }

            const offset = -currentIndex * 100; // Move o carrossel
            images.style.transform = `translateX(${offset}%)`;
        }


        let currentIndex1 = 0;

        function moveCarouseles(direction) {
            const images = document.querySelector('.carouseles-images');
            const totalImages = images.children.length;
            currentIndex1 += direction;

            if (currentIndex1 < 0) {
                currentIndex1 = totalImages - 1; // Vai para a última imagem
            } else if (currentIndex1 >= totalImages) {
                currentIndex1 = 0; // Volta para a primeira imagem
            }

            const offset = -currentIndex1 * 100; // Move o carrossel
            images.style.transform = `translateX(${offset}%)`;
        }