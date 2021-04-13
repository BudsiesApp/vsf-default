import { add } from 'src/modules/vsf-storyblok-module/components'

add('hero', () => import('./Hero.vue'))
add('Image', () => import('./Image.vue'))
add('product', () => import('./Product.vue'))
add('category', () => import('./Category.vue'))
add('Button', () => import('./Button.vue'))
add('RichText', () => import('./RichText.vue'))
add('ciLink', () => import('./Link.vue'))
// Overwrite an existing component
// add('tile', () => import('./Tile.vue'), { force: true })
