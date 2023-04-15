import { BlogListPage } from './components/BlogListPage'
import LayoutBase from './LayoutBase'

export const LayoutPage = props => {
  return (
    <LayoutBase {...props}>
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ marginTop: '50px', backgroundColor: '#E3EDCD', minHeight: 'calc(100vh - 50px)', height: 'auto', paddingBottom: '50px', boxSizing: 'border-box', width: '100%' }}>
          <div className="container mx-auto max-w-4xl md:flex justify-between justify-start w-full text-center md:text-left" style={{ display: 'flex', justifyContent: 'center', padding: '0 0px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px', border: '2px solid #A16B42', width: '100%' }}>
            <div className="flex-grow" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px 20px', margin: '0' }}>
              <BlogListPage {...props} />
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  )
}
