const container = document.querySelector('.stars');
        const items = container.querySelectorAll('.star-item')
        container.onclick = e => {
            const Class = e.target.classList;
                if (!Class.contains('active')) {
                    items.forEach(
                    item => item.classList.remove('active')
                );
            console.log(e.target.getAttribute("data-rate"));
            Class.add('active');
        }};