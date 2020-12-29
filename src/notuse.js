  <label htmlFor="animal">
                    Animal
                    <select  id="animal" 
                    value={animal} 
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}>
                    <option >All</option>
                    {ANIMALS.map(stringe => {
                       return <option key={stringe} value={stringe}>{stringe}</option> })}
                    </select>
                </label>Breed
                <label htmlFor="breed">
                    <select  id="breed"
                    value = {breed}
                    onChange = {e => setBreed(e.target.value)}
                    onBlur = {e => setBreed(e.target.value)}
                    disabled={breeds.length === 0}>
                    <option >All</option>
                    {breeds.map(breedStr => {
                       return <option key = {breedStr} value={breedStr}>{breedStr}</option>
                    }
                    )}
                    </select>    
                </label>




