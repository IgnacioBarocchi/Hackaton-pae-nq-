import { favouriteRecordUpdater } from '../src/store/helpers/favouriteRecordUpdater';
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../src/data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

const expectedRecord = {
    id: 1,
    title: 'TECNOLOGOS 4.0',
    description:
        'La propuesta consiste en la creación de una aplicación de celular con plataforma virtual para establecer vinculos entre empresas que cuenten ofertas laborales y los curriculum vitae de los postulantes, los cuales seran estudiantes y egresados de escuelas técnicas de nivel local, provincial con proyección nacional. Esta app generara ese puente del primer empleo en contexto de pandemia, facilitando las entrevistas y el ingreso al mundo del trabajo para disminuir la desocupación en los jóvenes técnicos profesionales.',
    likes: '2',
    source: 'https://ar.socialab.com/challenges/hackatonpaenqn/idea/132504',
    boolVal: true,
    tags: [],
};

//@ts-ignore
describe('library', () => {
    //@ts-ignore

    it('returns an array of records', () => {
        const input = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;

        const newCollectionWithNewRecord = favouriteRecordUpdater(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE, 1);

        //@ts-ignore
        expect(newCollectionWithNewRecord.length).toBe(input.length);
        //@ts-ignore
        expect(newCollectionWithNewRecord[0]).toStrictEqual(expectedRecord);
    });

    //@ts-ignore
    it('throws if input is invalid', () => {
        const input = 'String, foo, bar.';
        // @ts-ignore
        expect(() => favouriteRecordUpdater(input, 1)).toThrow(TypeError);
    });
});
