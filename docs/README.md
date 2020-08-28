---

home: true
heroImage: /img/browser.svg
heroText: Charles Jeandey
tagline: Developpeur Web PHP Laravel
actionText: Contact Me →
actionLink: /contact/
features:
- title: Laravel
  details: Laravel is a web application framework with expressive, elegant syntax.  
   We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects.
- title: VueJS
  details: Vue est un framework évolutif pour construire des interfaces utilisateur.  À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale.
- title: TailwindCSS
  details: A utility-first CSS framework for rapidly building custom designs.  Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
- title: Livewire
  details: Livewire is a full-stack framework for Laravel that makes building dynamic interfaces simple, without leaving the comfort of Laravel.
- title: AlpineJS
  details: Alpine.js offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.
- title: VuePress
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: Copyright © 2020 Charles Jeandey

---

::: details Bonjour!

Ce site a été fait avec VuePress! :cowboy_hat_face:

``` php{3}

Route::get('home', function () {
      return 'Bonjour à tous!';
    });

```
:::


- Reconverti développeur Web depuis 4 ans. :rocket:

- Je me suis formé (et continue) sur les plateformes ***[Laracasts](https://laracasts.com/)*** et ***[Openclassrooms](https://openclassrooms.com/)*** :man_student: notamment, et particulièrement au framework PHP Laravel, qui est devenu mon outil préféré afin de mener à bien mes projets aussi bien personnels que professionnels.



# :fire: Mes outils de développement préférés :fire:

[[toc]]


## Laravel

<img width="40px" src="/img/laravel-logo.svg" />

``` php

return Destination::orderByDesc(
    Flight::select('arrived_at')
        ->whereColumn('destination_id', 'destinations.id')
        ->orderBy('arrived_at', 'desc')
        ->limit(1)
)->get();

```

- Ullamco consequat eu nisi proident elit exercitation dolor officia et velit duis mollit. Exercitation consequat nulla amet ullamco sunt deserunt qui pariatur adipisicing. Sunt reprehenderit irure cupidatat esse elit laboris nostrud anim.

- Minim do in do fugiat do nisi laborum Lorem. Occaecat et quis consequat commodo cillum dolore veniam exercitation. Enim proident et incididunt voluptate nulla quis nulla voluptate magna culpa ut. Non qui ut exercitation nulla nostrud laborum. Duis ea proident ex quis dolor ullamco est in in elit duis ex laborum. Duis non dolor enim amet incididunt fugiat sint duis eiusmod nisi.

- Ipsum officia ex non exercitation anim eiusmod est exercitation officia. Dolor dolor et et occaecat Lorem sit. Excepteur exercitation duis mollit nisi Lorem esse laboris tempor voluptate ex consequat. Dolore consectetur reprehenderit ad ex eu minim labore exercitation. Esse cupidatat aute veniam consectetur sint enim. Officia aute incididunt quis laboris labore officia. Proident officia laboris enim irure excepteur eiusmod fugiat occaecat irure tempor laborum.

## TailwindCSS 

<img width="40px" src="/img/tailwind-logo.svg" />

``` html

<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase">
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Something cool</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  </div>
</div>

```

- Ullamco consequat eu nisi proident elit exercitation dolor officia et velit duis mollit. Exercitation consequat nulla amet ullamco sunt deserunt qui pariatur adipisicing. Sunt reprehenderit irure cupidatat esse elit laboris nostrud anim.

- Minim do in do fugiat do nisi laborum Lorem. Occaecat et quis consequat commodo cillum dolore veniam exercitation. Enim proident et incididunt voluptate nulla quis nulla voluptate magna culpa ut. Non qui ut exercitation nulla nostrud laborum. Duis ea proident ex quis dolor ullamco est in in elit duis ex laborum. Duis non dolor enim amet incididunt fugiat sint duis eiusmod nisi.


## VueJS 

<img width="40px" src="/img/vue-logo.svg" />

``` js

<template>
    <div class="counter">
        <h1>{{number}}</h1>
        <button @click = "decrement">-</button>
        <button @click = "increment">+</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                number: 0,
            }
        },
        methods:{
            increment(){
                if(this.number >= 0){
                    this.number++
                }
            },
            decrement(){
                if(this.number > 0){
                    this.number --
                }
            }
        }
    }
</script>

```
#### Et voici le résultat:

<Counter />

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

- Culpa laborum et cillum proident in Lorem sunt aute mollit duis cupidatat eu cillum. Amet eiusmod ad ex exercitation esse ex laborum eu. Lorem anim officia ad ipsum velit eiusmod id. Duis do eiusmod ea sit cupidatat ad commodo occaecat. Sint consectetur ex qui sunt cillum dolor deserunt velit voluptate occaecat tempor est occaecat. Veniam sint ad et nulla exercitation consequat veniam dolor dolore laborum duis aliqua elit.


## Livewire 

<img width="40px" src="/img/livewire-logo.svg" />

``` PHP

use Livewire\Component;

class SearchUsers extends Component
{
    public $search = '';

    public function render()
    {
        return view('livewire.search-users', [
            'users' => User::where('username', $this->search)->get(),
        ]);
    }
}

```

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

- Culpa laborum et cillum proident in Lorem sunt aute mollit duis cupidatat eu cillum. Amet eiusmod ad ex exercitation esse ex laborum eu. Lorem anim officia ad ipsum velit eiusmod id. Duis do eiusmod ea sit cupidatat ad commodo occaecat. Sint consectetur ex qui sunt cillum dolor deserunt velit voluptate occaecat tempor est occaecat. Veniam sint ad et nulla exercitation consequat veniam dolor dolore laborum duis aliqua elit.

## Alpine JS 

<img width="40px" src="/img/alpine-logo.svg" /> 

``` html

<div x-data="{ open: false }">
    <button @click="open = true">Open Dropdown</button>

    <ul
        x-show="open"
        @click.away="open = false"
    >
        Dropdown Body
    </ul>
</div>

```

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

## Static Site Generator (VuePress, Jigsaw, Nuxt, Gridsome...)

<img width="40px" src="/img/vuepress.png" />

``` yaml
---
home: true
heroImage: /img/laravel-logo.svg
heroText: Charles Jeandey
tagline: Developpeur Web PHP Laravel
actionText: Contact Me →
actionLink: /contact/
features:
- title: Laravel
  details: Laravel is a web application framework with expressive, elegant syntax.  
   We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects.
- title: VueJS
  details: Vue est un framework évolutif pour construire des interfaces utilisateur.  À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale.
footer: MIT Licensed | Copyright © 2018-present Evan You
---

```

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

- Culpa laborum et cillum proident in Lorem sunt aute mollit duis cupidatat eu cillum. Amet eiusmod ad ex exercitation esse ex laborum eu. Lorem anim officia ad ipsum velit eiusmod id. Duis do eiusmod ea sit cupidatat ad commodo occaecat. Sint consectetur ex qui sunt cillum dolor deserunt velit voluptate occaecat tempor est occaecat. Veniam sint ad et nulla exercitation consequat veniam dolor dolore laborum duis aliqua elit.

## Git & Github 

<img width="40px" src="/img/git-logo.svg" />

- GitHub est un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git.
---

``` sh

git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

```

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

## Visual Studio Code 

<img width="40px" src="/img/visualstudio-logo.svg" />

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.

- Culpa laborum et cillum proident in Lorem sunt aute mollit duis cupidatat eu cillum. Amet eiusmod ad ex exercitation esse ex laborum eu. Lorem anim officia ad ipsum velit eiusmod id. Duis do eiusmod ea sit cupidatat ad commodo occaecat. Sint consectetur ex qui sunt cillum dolor deserunt velit voluptate occaecat tempor est occaecat. Veniam sint ad et nulla exercitation consequat veniam dolor dolore laborum duis aliqua elit.

## Sublime text 

<img width="40px" src="/img/sublime-logo.svg" />

- Incididunt exercitation et mollit tempor qui sint sint elit elit. Aliquip officia sit occaecat nulla ut. Ad nostrud anim elit id nulla et occaecat adipisicing id eu dolore ullamco est.

- Laborum in ipsum excepteur enim duis cillum sunt nisi ipsum enim. Aliquip anim anim cupidatat veniam quis adipisicing labore veniam nulla enim esse exercitation qui. Laborum enim pariatur sit velit culpa irure non laboris minim dolore.
