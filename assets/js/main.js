// about navigation skills
const navigation_skills = document.querySelectorAll('.skills_sec .navigation_skills ul li');
const content_skills = document.querySelectorAll('.skills_sec .content_skills ul li');

navigation_skills.forEach(item => {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    navigation_skills.forEach(i=> {
      i.classList.remove('active');
    });

    content_skills.forEach(i=> {
      i.classList.remove('active');
    });

    content.classList.add('active');
    this.classList.add('active');
  });
});


