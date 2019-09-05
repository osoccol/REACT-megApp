import chai from 'chai'
import createChaiEnzyme from 'chai-enzyme'
import { configure as configureEnzyme } from 'enzyme'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import Adapter from 'enzyme-adapter-react-16'
import sinonChai from 'sinon-chai'

chai
	.use(dirtyChai)
	.use(createChaiJestDiff())
	.use(chaiJestSnapshot)
	.use(createChaiEnzyme())
	.use(sinonChai)
	
expect.addSnapshotSerializer(enzymeToJSON)
	
configureEnzyme({adapter: new Adapter()})