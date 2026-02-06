//profile photo and cover photo
document.addEventListener('DOMContentLoaded', function () {
  // Profile Photo Upload
  const profilePhotoUpload = document.getElementById('profile-photo-upload');
  const profilePhotoInput = document.createElement('input');
  profilePhotoInput.setAttribute('type', 'file');
  profilePhotoInput.setAttribute('accept', 'image/*');
  profilePhotoInput.style.display = 'none';

  profilePhotoUpload.addEventListener('click', function () {
    profilePhotoInput.click();
  });

  profilePhotoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const coverImg = document.getElementById('cover-img');
        coverImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Cover Photo Upload
  const coverPhoto = document.getElementById('cover-img');

  coverPhoto.addEventListener('click', function () {
    profilePhotoInput.click();
  });

  coverPhotoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const coverImg = document.getElementById('cover-img');
        coverImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});


//portfolio

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle photo upload for a given upload icon
  function handlePhotoUpload(uploadIconId) {
    const uploadIcon = document.getElementById(uploadIconId);
    const photoUploadInput = document.createElement('input');
    photoUploadInput.setAttribute('type', 'file');
    photoUploadInput.setAttribute('accept', 'image/*');
    photoUploadInput.style.display = 'none';

    uploadIcon.addEventListener('click', function () {
      photoUploadInput.click();
    });

    photoUploadInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const photoUploadDiv = document.getElementById(uploadIconId);
          photoUploadDiv.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Loop through all photo upload icons and attach event listeners
  for (let i = 1; i <= 8; i++) {
    const uploadIconId = `photo-upload-${i}`;
    handlePhotoUpload(uploadIconId);
  }
});




//progress bars

document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progress-bar');
  const progressSlider = document.getElementById('progress-slider');

  progressSlider.addEventListener('input', function() {
      const value = progressSlider.value;
      progressBar.style.width = value + '%';
      progressBar.setAttribute('aria-valuenow', value);
  });
});

//education add button

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('edu-add-btn');
  const educationSection = document.querySelector('.right-div2');

  addButton.addEventListener('click', function() {
      // Clone the entire education section
      const clonedSection = educationSection.cloneNode(true);
      
      // Reset the input fields in the cloned section
      const inputs = clonedSection.querySelectorAll('input');
      inputs.forEach(input => {
          input.value = '';
      });
      
      const textarea = clonedSection.querySelector('textarea');
      if (textarea) {
          textarea.value = '';
      }
      
      // Insert the cloned section after the existing section
      educationSection.parentNode.insertBefore(clonedSection, educationSection.nextSibling);
      
      // Update the event listeners for the new "+ADD" button in the cloned section
      const newAddButton = clonedSection.querySelector('#edu-add-btn');
      if (newAddButton) {
          newAddButton.addEventListener('click', addButtonClickHandler);
      }
  });

  function addButtonClickHandler() {
      // Clone the entire education section
      const clonedSection = educationSection.cloneNode(true);
      
      // Reset the input fields in the cloned section
      const inputs = clonedSection.querySelectorAll('input');
      inputs.forEach(input => {
          input.value = '';
      });
      
      const textarea = clonedSection.querySelector('textarea');
      if (textarea) {
          textarea.value = '';
      }
      
      // Insert the cloned section after the existing section
      educationSection.parentNode.insertBefore(clonedSection, educationSection.nextSibling);
      
      // Update the event listeners for the new "+ADD" button in the cloned section
      const newAddButton = clonedSection.querySelector('#edu-add-btn');
      if (newAddButton) {
          newAddButton.addEventListener('click', addButtonClickHandler);
      }
  }
});



//footer

const stars = document.querySelectorAll('.fa-star');
                
                  stars.forEach((star, index) => {
                    star.addEventListener('mouseover', () => {
                      highlightStars(index);
                    });
                
                    star.addEventListener('click', () => {
                      highlightStars(index);
                    });
                  });
                
                  function highlightStars(index) {
                    stars.forEach((star, i) => {
                      if (i <= index) {
                        star.classList.add('active');
                      } else {
                        star.classList.remove('active');
                      }
                    });
                  }





