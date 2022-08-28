let nav1 = `
 <div>
    <div>
        <img src="data:image/png;base64,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" alt="">
        <p>Free Shipping</p>
    </div>
    <div>
        <img src="data:image/png;base64,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" alt="">
        <p>Click & Connect</p>
    </div>
    <div>
        <img src="data:image/png;base64,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" alt="">
        <p>Return to Store</p>
    </div>
</div>
<div>
    <p>Download our Apps</p>
    <p>Store Locator</p>
    <p>Help</p>
</div>`
let Navbar1 = document.querySelector("#navbar1");
Navbar1.innerHTML = nav1 