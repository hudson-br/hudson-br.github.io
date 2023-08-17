---
layout: page
title: Criticality in living systems
description: Collective effects in muscle contraction and cellular adhesion
img: assets/img/flock.gif
importance: 1
category: work
related_publications: da2021plausible, PhysRevLett.124.015501, PhysRevLett.122.088103, BORJADAROCHA2022104646, HBRLTAAM2019
---

Emerging phenomena are ubiquitous in biological systems, and considerable efforts have recently been made to characterize them with the level of mathematical sophistication adopted in physics. The primary tool in such studies is nonequilibrium statistical mechanics, which provides a bridge between the inanimate interactions and the emerging phenomena of life.

 <d-cite key="BORJADAROCHA2022104646"></d-cite>

Criticality and ubiquity of power laws are issues of great significance in such studies, giving a framework for understanding the emergence of complexity in a plethora of natural systems, from earthquakes to turbulence. The concept of criticality in living systems is borrowed from physics and refers to a delicate balance where the system operates at the edge between order and chaos. In criticality, small changes can have profound effects, leading to sudden and significant shifts in behavior or function. Imagine a flock of birds flying together in a beautiful pattern – they are in a critical state, where even a slight change in the behavior of one bird can cause the entire flock's pattern to transform dramatically. This critical behavior is not limited to birds; it is present in various biological processes, such as our brains' neural activity and the beating of our hearts. Contrary to inanimate matter, where criticality is often fine-tuned, living systems appear to be poised near critical points. Scientists believe that this criticality is not just a random occurrence but serves a purpose in living systems. It may optimize information processing, enhance adaptability, and enable living organisms to respond quickly and efficiently to their ever-changing environment. Understanding criticality in living systems could open doors to new insights into health, disease, and the delicate balance that sustains life itself.

My Ph.D. research lied in the interface between mechanics, physics and biology. I used tools from mechanics and physics to explore two seemingly disparate biological systems: cell adhesion and muscle contraction. I studied these systems in parallel due to the striking structural similarities between them. Both cases can be modeled by a large number of multi-stable units coupled through long-range interactions, affected by quenched disorder (geometrical heterogeneities), and exposed to thermal noise. While there are formal differences between the two, I was able to identify a common underlying spin-glass structure between muscle cross-bridges and adhesive binders.

#### Muscle contraction
In muscles, it is long known that its response to sudden perturbations exhibits near zero rigidity in physiological conditions (marginal stability), which is a fingerprint of critical systems. Because of their highly ordered structure, skeletal muscles are often described as crystal-like materials. However, experiments using electron microscopy and x-ray diffraction have shown that myosin heads are bound to actin at seemingly random positions, revealing that muscle contraction is frustrated by structural quenched disorder. Our study showed that muscle machinery is fine-tuned to operate near criticality, and we argued that the quenched disorder might be biologically functional (Borja da Rocha & Truskinovsky, 2019).

Besides the account of geometrical inhomogeneity, our recent work on muscle contraction also uncovered an important role played by steric interaction between myosin heads, which can cause additional functional incoherency in the functioning of this mechanical system. The presence of both quenched inhomogeneity and destabilizing short-range interactions suggests that muscle systems are closer to structural glasses that are hierarchically organized than to much more simple periodic crystals (Borja da Rocha, 2018). In our ongoing research, we use experimental observations on activated muscle fibers' mechanics to quantify the effect of the underlying structural complexity on the ability of active actomyosin networks to generate highly efficient contractile stresses.

#### Cell adhesion/fracture
I proposed an analogy between cellular adhesion and thermalized fracture of disordered materials to study the fluctuations during cellular adhesion. We related the obtained results to recent observations of intermittent behavior involved in cell debonding, also suggesting near-criticality. The model for cellular adhesion inspired an augmented version of the classic fiber bundle model (FBM), which is a prototypical model of fracture in disordered solids. 

Contrary to the predictions of damage mechanics in homogeneous media, which describe the deterioration of the material as a continuous process, experiments show that damage occurs in bursts of micro-rupture separated by elastic phases. Recent studies reveal that these fluctuations have unique non-Gaussian features, like long tails and strong correlations. My research, using analytical models, demonstrates how material properties affect these fluctuations.

<!-- 
Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %} -->
