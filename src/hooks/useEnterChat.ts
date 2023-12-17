import { ref } from "vue"

export const useEnterChat = () => {
	const showChats = ref<boolean>(true)
	const closeChat = () => showChats.value = true

	const uuid = ref<string>('')
	const room = ref<string>('')

	const enterChat = (uuidRoom: string, roomName: string) => {
		showChats.value = false
		
		uuid.value = uuidRoom
		room.value = roomName
	}

	return { showChats, closeChat, uuid, room, enterChat }
}