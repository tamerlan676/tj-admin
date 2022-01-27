import { ref } from 'vue'
import { useFetch } from './fetch'

export async function useProducts () {
  const loaded = ref(false)
  const { response: products, request } = useFetch('http://192.168.200.32:81/admin/api/v1/get_goods')

  if (!loaded.value) {
    await request()
    loaded.value = true
  }

  return { products }
}
