function update(e) {
    // clientX : Gives the Output coordinates of the mouse pointer while the mouse pointer moves over an element
    // touches.clientX : Gives the Output coordinates of the pointer for touch devices

    const x = e.clientX || e.touches[0].clientX
    const y = e.clientY || e.touches[0].clientY
    // Setting a new value for a property on a CSS style declaration object.

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}
// for Desktops
document.addEventListener('mousemove', update)

// for Touch Devices
document.addEventListener('touchmove', update)