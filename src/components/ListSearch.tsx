"use client"
import { ListItem, ListType } from "@/types";
import { useList } from "@/use/list";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ShowImage } from "./ShowImage";

export default function ListSearch() {
  const [data, setData] = useState<ListItem[]>([]);
  const [select, setSelect] = useState<ListType>("books");
  const [target, setTarget] = useState<string>("");

  const list = useList()
  const router = useRouter()

  useEffect(() => {
    list.get(select).then((data) => {
      if(data) setData(data)
    })
  }, [])

  const renderList = useMemo(() => {
    return data.filter(item => {
      if (target === '') return true

      const input = target.trim().toLowerCase()

      const key = list.getAttributeKey(select)

      return item.attributes[key].trim().toLowerCase().includes(input)
    })
  }, [target, data])

  const onItemProfile = (item: ListItem) => {
    router.push(`/item?id=${item.id}&type=${select}`)
  }

  return (
    <>
      <div className="flex w-full mt-120">
        <div className="flex flex-wrap gap-5 w-full bg-gray-100 border h-10 rounded">
          <input placeholder="Busque um item em específico..." onChange={(e) => { setTarget(e.target.value) }} value={target} className="flex-1 shadow-xl border border-gray rounded-full px-5" type="text" />
          <select
            value={select}
            onChange={(e) => {
              const target = e.target.value as ListType

              setSelect(target);

              list.get(target).then((data) => {
                setData(data)
              })
            }}
          >
            <option value="books">Livros</option>
            <option value="characters">Personagens</option>
            <option value="movies">Filmes</option>
            <option value="potions">Poções</option>
            <option value="spells">Habilidades</option>
          </select>
        </div>
      </div>
      <div id="list" className="flex items-center justify-center w-full">
        <div className="flex flex-wrap mt-10 h-120 overflow-y-auto items-center gap-10 w-full shadow-xl">
          {renderList.map(item => (
            <section onClick={() => onItemProfile(item)} className="p-2 hover:bg-gray-300 w-80 flex gap-5 min-h-80 justify-center flex-col items-center cursor-pointer" key={item.id}>
              <ShowImage attributes={item.attributes} />
              <h2 className="text-center">{item.attributes[list.getAttributeKey(select)]}</h2>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}