// Controlador: Reúne los modelos y expone un objeto listo para la vista principal.
import { productList } from '../models/products.js'
import { siteInfo } from '../models/siteInfo.js'

export const getLandingContent = () => ({
  products: productList,
  ...siteInfo,
})
