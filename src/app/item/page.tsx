"use client"
import { ShowImage } from "@/components/ShowImage";
import { IconBack } from "@/components/icons/IconBack";
import { IconOpen } from "@/components/icons/IconOpen";
import { IconSpinner } from "@/components/icons/IconSpinner";
import { ListItem, ListType } from "@/types";
import { useList } from "@/use/list";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams()
  const list = useList()
  const router = useRouter()

  const [item, setItem] = useState<ListItem | null>(null)
 
  const id = searchParams.get('id')
  const type = searchParams.get('type')

  if(!id || !type) {
    router.back()

    return
  }

  useEffect(() => {
    list.getItem(id, type as ListType).then((data) => {
      setItem(data)
    })
  }, [])

  return (
    <>
      <IconBack onClick={() => router.back()} className="cursor-pointer relative left-10 top-10" />
      <main className="flex items-center justify-center w-full overflow-y-auto">
        {!item && <IconSpinner className="mt-50" />}
        {
          item && (
            <div className="flex flex-col w-50% mt-20">
              <h2 className="mb-10 text-center text-3xl font-bold">{item!.attributes[list.getAttributeKey(type)]}</h2>
              <div className="flex w-full justify-center items-center">
                {
                  Object.entries(item.attributes).map(([key]) => {
                    if(['cover', 'image', 'poster'].includes(key)) return (<ShowImage attributes={item.attributes} />)
                  })
                }
              </div>
              <div className="flex flex-col gap-5">
                { Object.entries(item.attributes).map(([key, value]) => {
                  if(['wiki', 'trailer'].includes(key)) return (
                    <section className="flex items-center gap-1">
                      <IconOpen />
                      <a className="decoration-none text-black underline text-xl" href={value}>{list.getKeyName(key)}</a>
                    </section>
                  )

                  if(['cover', 'image', 'slug', 'poster'].includes(key)) return (<></>)

                  if(!value || value?.length === 0) return (<></>)

                  return (
                    <div className="flex gap-10 py-5 text-lg items-center w-full">
                      {list.getKeyName(key)}:
                      <p className="text-xl text-purple-500 hover:text-green-400">
                        {value}
                      </p>
                    </div>
                )})}
              </div>
            </div>
          )
        }
      </main>
      <svg className="relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  )
}