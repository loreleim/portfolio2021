'use client'
import ImageTemplate from '@/components/template-image';
import Quicklinks from '@/components/template-quicklinks';
import TagTemplate from '@/components/template-tags';
import TextAreaTemplate from '@/components/template-textarea';
import SpacerTemplate from '@/components/template-spacer';
import store from "@/database";
 
export default function Page({ params }) {

  const { slug } = params;

  // compare to store db
  const project = store.projects.find((p) => p.urlSlug === slug);

  // Handle loading or when no project is found
  if (!project) {
    return <div>Loading...</div>; 
  }

  function checkType(passedObject) {
    switch (passedObject.type) {
      case 'textarea':
        return <TextAreaTemplate passedData={passedObject} />;
      case 'image':
        return <ImageTemplate passedData={passedObject} />;
      case 'tagsBlock':
        return <TagTemplate passedData={passedObject} />;
      case 'quicklinks':
        return <Quicklinks passedData={passedObject} />;
      case 'spacer':
        return <SpacerTemplate/>
      default:
        return null;
    }
  }

  return (
    <div className="mx-8 my-8 text-left text-[#262525] lg:my-[10vh] lg:mx-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 dark:text-white">
      <h1 className='text-5xl'>{project.name}</h1>
      {project ? project.content.map((item, index) => (
        <div key={index}>{checkType(item)}</div>
      )) : null}
    </div>
  );
}