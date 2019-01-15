/**
 * 3、在一个文件或模块中，export、import可以有多个，export default仅有一个
 4、通过export方式导出，在导入时要加{ }，export default则不需要
 */
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar/index.vue'
export { default as TagsView } from './TagsView'
export { default as AppMain } from './AppMain'
export { default as AppFooter} from './AppFooter'
