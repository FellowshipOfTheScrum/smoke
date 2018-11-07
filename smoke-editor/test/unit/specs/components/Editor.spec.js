import Editor from '@/components/Editor'
import { expectAsync, mount } from '../utils'
import moxios from 'moxios'

describe('Editor.vue', () => {
  beforeEach(() => {
    window.onbeforeunload = () => {}
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should set content to empty string', () => {
    const vm = mount(Editor)
    expect(vm.$data.content).to.equal('')
  })

  it('should submit on test click', (done) => {
    const vm = mount(Editor)
    vm.submit()

    expectAsync(200, {status: 'Success'})

    done()
  })

  it('should default to full size', () => {
    const vm = mount(Editor)
    expect(vm.widthVar).to.equal('column is-full')
  })

  it('should change to the small size', () => {
    const vm = mount(Editor)
    vm.changeWindow()
    expect(vm.widthVar).to.equal('column is-half')
  })

  it('should change back to default size', () => {
    const vm = mount(Editor)
    vm.changeWindow()
    vm.changeWindow()
    expect(vm.widthVar).to.equal('column is-full')
  })
})
