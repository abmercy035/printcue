// Daniblingz Printing Enterprise - Main JavaScript

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active")

      // Toggle icon between hamburger and close
      const icon = this.textContent
      this.textContent = icon === "☰" ? "✕" : "☰"
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        mobileMenuToggle.textContent = "☰"
      })
    })
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})

// Form Validation (for contact page)
function validateContactForm(event) {
  event.preventDefault()

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const service = document.getElementById("service")
  const message = document.getElementById("message")

  let isValid = true
  let errorMessage = ""

  // Name validation
  if (!name.value.trim()) {
    isValid = false
    errorMessage += "Please enter your name.\n"
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    isValid = false
    errorMessage += "Please enter a valid email address.\n"
  }

  // Phone validation
  if (!phone.value.trim()) {
    isValid = false
    errorMessage += "Please enter your phone number.\n"
  }

  // Service validation
  if (!service.value) {
    isValid = false
    errorMessage += "Please select a service.\n"
  }

  // Message validation
  if (!message.value.trim()) {
    isValid = false
    errorMessage += "Please enter your message.\n"
  }

  if (!isValid) {
    alert(errorMessage)
    return false
  }

  // Show success message
  alert("Thank you for contacting Daniblingz! We will get back to you soon.")

  // Reset form
  event.target.reset()

  return false
}

// Catalogue Filter Functionality
function filterCatalogue(category) {
  const cards = document.querySelectorAll(".catalogue-card")
  const buttons = document.querySelectorAll(".filter-btn")

  // Update active button
  buttons.forEach((btn) => btn.classList.remove("active"))
  event.target.classList.add("active")

  // Filter cards
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block"
      // Fade in animation
      card.style.animation = "fadeIn 0.5s ease"
    } else {
      card.style.display = "none"
    }
  })
}

// Add fade in animation
const style = document.createElement("style")
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)
