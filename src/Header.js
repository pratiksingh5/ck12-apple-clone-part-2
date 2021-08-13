import React from 'react'

function Header() {
    return (
        <div>
        <div>   
        <div class="nav-wrapper fixed-top">
        <div class="container">
          <nav class="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a class="navbar-brand mx-auto" href="https://www.apple.com/"
              ><i class="ri-apple-fill"></i></a>
  
            <div class="navbar-collapse collapse">
              <ul class="navbar-nav nav-justified w-100 nav-fill">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">Mac</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">iphone</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">ipad</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">watch</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">tv</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">Music</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/"
                    ><i class="ri-search-line"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="https://www.apple.com/"
                    ><i class="ri-handbag-line"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        </div>
        </div>
    )
}

export default Header
